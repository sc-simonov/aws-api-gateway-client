import React, {Component} from 'react';
import ApiItem from './ApiItem';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

/**
 * 
 */
class ApiList extends Component
{
    render() {
        const items = this.props.items.map((u, idx) => {
            return <ApiItem 
                name={u.name} 
                key={u.id} 
                description={u.description}
                apiId={u.id}
                accountId={this.props.accountId}
            />;
        });

        return (
            <Grid container spacing={40}>
                {items}
            </Grid>
        );
    }
}

export default ApiList;

ApiList.propTypes = {
    accountId: PropTypes.any.isRequired
};