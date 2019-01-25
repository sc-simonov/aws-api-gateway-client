import React, {Component} from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { createSelector } from 'reselect'
import arrayToTree from 'array-to-tree';
import {
    loadResources,
    deleteResourceApiRequest,
    deleteMethodApiRequest,
    loadRestApi
} from '../../store/actions/entriesActions';
import {
    setFilteringStatus,
    setFilterValue,
} from '../../store/actions/apiResourceDetailActions';
import { addErrorNotification } from '../../store/actions/notificationActions';
import EntriesTree from '../../components/entriesTree/EntriesTree';
import DialogFormComponent from '../../components/dialog/DialogFormComponent';
import RestApiResourceForm from '../form/restApiResource/RestApiResourceForm';
import StepperRestApiMethodForm from '../form/method/StepperRestApiMethodForm';
import ResourceActionEnum from '../../enum/resourceActionsEnum';
import IntegrationForm from '../form/method/IntegrationForm';
import ResponseForm from '../form/method/ResponseForm';
import InnerPageWrapper from '../../components/innerPageWrapper/InnerPageWrapper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BackIcon from '@material-ui/icons/ArrowBack';
import SearchBar from '../../components/searchBar/SearchBar';

/**
 * 
 */
class ApiResourceDetail extends Component
{
    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            accountId: props.match.params.accountId,
            apiId: props.match.params.apiId,
            resourceAction: null,
            activeResourceId: null,
            httpMethod: null,
            filterDisabled: false,
            isFilterApplied: false,
            filterTree: [],
        };
    }

    /**
     *
     */
    componentDidMount() {
        if (!this.props.entries) {
            this.props.loadResources(this.state.accountId, this.state.apiId);
        }

        this.props.loadRestApi(this.state.accountId, this.state.apiId);
    }

    /**
     *
     * @returns {Array}
     */
    getEntries = () => {
        return this.props.entries && Array.isArray(this.props.entries[this.state.apiId]) ? this.props.entries[this.state.apiId] : [];
    };

    /**
     *
     */
    flushResourceAction = () => {
        this.setState({
            resourceAction: null,
            activeResourceId: null,
            httpMethod: null
        });
    };

    /**
     *
     * @param resourceId
     * @param action
     */
    handleInitResourceAction = (resourceId, action) => {
        switch (action) {
            case ResourceActionEnum.DELETE_RESOURCE:
                this.deleteResource(resourceId);
                break;

            case ResourceActionEnum.CREATE_HTTP_METHOD:
            case ResourceActionEnum.CREATE_RESOURCE:
                this.setState({
                    resourceAction: action,
                    activeResourceId: resourceId
                });
                break;

            default:
                this.props.addErrorNotification('Unknown action');
                break;
        }
    };

    /**
     *
     * @param resourceId
     * @param httpMethod
     * @param action
     */
    handleInitHttpMethodAction = (resourceId, httpMethod, action) => {
        switch (action) {
            case ResourceActionEnum.DELETE_HTTP_METHOD:
                this.props.deleteMethodApiRequest(this.state.accountId, this.state.apiId, resourceId, httpMethod);
                break;

            case ResourceActionEnum.CREATE_HTTP_INTEGRATION:
            case ResourceActionEnum.CREATE_HTTP_RESPONSE:
                this.setState({
                    resourceAction: action,
                    activeResourceId: resourceId,
                    httpMethod: httpMethod
                });
                break;

            default:
                this.props.addErrorNotification('Unknown action');
                break;
        }
    };

    /**
     *
     * @param resourceId
     */
    deleteResource = (resourceId) => {
        this.props.deleteResourceApiRequest(this.state.accountId, this.state.apiId, resourceId);
    };

    /**
     *
     */
    onCloseDialog = () => {
        this.flushResourceAction();
    };

    /**
     *
     * @param resourceId
     *
     * @returns {*}
     */
    findResourceById = (resourceId) => {
        return find(this.props.entries, {id: resourceId});
    };

    /**
     *
     * @returns {*}
     */
    renderForm = () => {
        if (!Boolean(this.state.resourceAction)) {
            return null;
        }

        let form = null;
        let title = '';
        const resource = this.findResourceById(this.state.activeResourceId);
        if (!resource) {
            this.props.actions.addErrorNotification('Unknown resource');

            return null;
        }

        switch (this.state.resourceAction) {
            case ResourceActionEnum.CREATE_RESOURCE:
                    form = <RestApiResourceForm
                        basePath={resource.path}
                        accountId={this.state.accountId}
                        restApiId={this.state.apiId}
                        parentResourceId={resource.id}
                        isUpdateAction={false}
                        onSuccess={this.flushResourceAction}
                        onCancel={this.flushResourceAction}
                    />;
                    title = 'Create a new resource';
                break;

            case ResourceActionEnum.CREATE_HTTP_METHOD:
                form = <StepperRestApiMethodForm
                    accountId={this.state.accountId}
                    restApiId={this.state.apiId}
                    resource={resource}
                    onCancel={this.flushResourceAction}
                    onSuccess={this.flushResourceAction}
                />;
                title = 'Create a new HTTP method';
                break;

            case ResourceActionEnum.CREATE_HTTP_INTEGRATION:
                form = <IntegrationForm
                    accountId={this.state.accountId}
                    restApiId={this.state.apiId}
                    resourceId={this.state.activeResourceId}
                    isUpdateAction={false}
                    httpMethod = {this.state.httpMethod}
                    onCancel={this.flushResourceAction}
                    onSuccess={this.flushResourceAction}

                />;
                title = 'HTTP integration';
                break;

            case ResourceActionEnum.CREATE_HTTP_RESPONSE:
                form = <ResponseForm
                    accountId={this.state.accountId}
                    restApiId={this.state.apiId}
                    resourceId={this.state.activeResourceId}
                    isUpdateAction={false}
                    httpMethod = {this.state.httpMethod}
                    onCancel={this.flushResourceAction}
                    onSuccess={this.flushResourceAction}
                />;
                title = 'HTTP response';
                break;

            default:
                break;
        }

        return (
            <DialogFormComponent open={true} title={title} onClose={this.onCloseDialog}>
                { form }
            </DialogFormComponent>
        );
    };

    /**
     *
     */
    handleRedirectToRestApis = () => {
        this.props.history.push(`/account/${this.props.match.params.accountId}/api`);
    };

    /**
     *
     * @param qString
     */
    handleOnFilter = (qString) => {
        //if (this.state.)

        console.log('on filter', qString);
        //this.setState({filterDisabled: true});
    };

    /**
     *
     * @returns {*}
     */
    render() {
        const { restApi, loadingRestApi, entriesTree } = this.props;
        const { filterDisabled, isFilterApplied, filterTree } = this.state;
        const title = loadingRestApi ? 'loading...' : restApi.name ? restApi.name : '';

        return (
            <InnerPageWrapper
                title={ title }
                actions={
                    <React.Fragment>
                        <SearchBar onBlur={ this.handleOnFilter } disabled={ filterDisabled } />
                        <Tooltip title="To REST APIs">
                            <IconButton aria-label="To REST APIs" onClick={ this.handleRedirectToRestApis } >
                                <BackIcon />
                            </IconButton>
                        </Tooltip>
                    </React.Fragment>
                }
            >
                <EntriesTree
                    entries={ isFilterApplied ? filterTree : entriesTree }
                    filterApplied={ isFilterApplied }
                    handleInitResourceAction={ this.handleInitResourceAction }
                    handleInitHttpMethodAction={ this.handleInitHttpMethodAction }
                />
                {this.renderForm()}
            </InnerPageWrapper>
        );
    }
}

/**
 *
 * @param state
 * @param props
 *
 * @returns {*}
 */
const getResources = (state, props) => state.entries.entries[props.match.params.apiId];

const resourceSelector = createSelector(
    [getResources],
    (entries) => {
        if (!entries || !Array.isArray(entries)) {
            return null;
        }

        return entries;
    });

const treeSelector = createSelector(
    [getResources],
    (entries) => {
        if (!entries || !Array.isArray(entries)) {
            return [];
        }

        return arrayToTree(entries, {
            parentProperty: 'parentId',
            customID: 'id'
        });
    }
);

/**
 *
 * @param state
 * @param props
 *
 * @returns {{entries: any, restApi: ({}|defaultState.restApi), loadingRestApi: boolean}}
 */
const mapStateToProps = (state, props) => {
    return {
        entries: resourceSelector(state, props),
        entriesTree: treeSelector(state, props),
        restApi: state.entries.restApi,
        loadingRestApi: state.entries.loadingRestApi,
    }
};

export default connect(mapStateToProps, {
    loadResources,
    deleteResourceApiRequest,
    addErrorNotification,
    deleteMethodApiRequest,
    loadRestApi,
})(ApiResourceDetail);
