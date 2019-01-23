import AWS_REGIONS from "./awsRegions";
import { map } from "lodash";

const AWS_SERVICES_ENUM = {
    AWSCertificateManager:"acm",
    AppStream:"appstream",
    Athena:"athena",
    AutoScaling:"autoscaling",
    CloudFormation:"cloudformation",
    CloudFront:"cloudfront",
    CloudHSM:"cloudhsm",
    CloudSearch:"cloudsearch",
    CloudTrail:"cloudtrail",
    CloudWatch:"cloudwatch",
    CloudWatchEvents:"events",
    CloudWatchLogs:"logs",
    CodeBuild:"codebuild",
    CodeCommit:"codecommit",
    CodeDeploy:"codedeploy",
    CodePipeline:"codepipeline",
    CognitoIdentity:"cognito-identity",
    CognitoSync:"cognito-sync",
    Config:"config",
    DataPipeline:"datapipeline",
    DeviceFarm:"devicefarm",
    DevPay:"devpay",
    DirectConnect:"directconnect",
    DirectoryService:"ds",
    DynamoDB:"dynamodb",
    DynamoDBStreams:"dynamodbstreams",
    ElasticCloudCompute:"ec2",
    EC2ContainerRegistry:"ecr",
    EC2ContainerService:"ecs",
    ElasticBeanstalk:"elasticbeanstalk",
    ElasticTranscoder:"elastictranscoder",
    ElastiCache:"elasticache",
    ElasticFileSystem:"elasticfilesystem",
    ElasticLoadBalancing:"elasticloadbalancing",
    ElasticMapReduce:"elasticmapreduce",
    Firehose:"firehose",
    GameLift:"gamelift",
    Glacier:"glacier",
    Health:"health",
    IdentityandAccessManagement:"iam",
    ImportExport:"importexport",
    Inspector:"inspector",
    InternetofThings:"iot",
    IoTData:"iotdata",
    Kinesis:"kinesis",
    KinesisAnalytics:"kinesisanalytics",
    KeyManagementService:"kms",
    Lambda:"lambda",
    Lightsail:"lightsail",
    MachineLearning:"machinelearning",
    MobileAnalytics:"mobileanalytics",
    OpsWorks:"opsworks",
    Pinpoint:"mobiletargeting",
    Polly:"polly",
    RelationalDatabaseService:"rds",
    Redshift:"redshift",
    Rekognition:"rekognition",
    Route53:"route53",
    Route53Domains:"route53domains",
    ServiceCatalog:"servicecatalog",
    SimpleStorageService:"s3",
    SimpleDB:"sdb",
    SimpleEmailService:"ses",
    Snowball:"snowball",
    SimpleNotificationService:"sns",
    SimpleQueueService:"sqs",
    SimpleSystemsManagement:"ssm",
    StepFunctions:"states",
    StorageGateway:"storagegateway",
    SecurityTokenService:"sts",
    Support:"support",
    SimpleWorkflowService:"swf",
    VirtualPrivateCloud:"vpc",
    WorkSpaces:"workspaces",
    XRay:"xray"
};

export default AWS_SERVICES_ENUM;

export const AWS_SERVICES_OPTIONS = {
    [AWS_SERVICES_ENUM.AWSCertificateManager]: "AWS Certificate Manager (ACM)",
    [AWS_SERVICES_ENUM.AppStream]: "AppStream",
    [AWS_SERVICES_ENUM.Athena]: "Athena",
    [AWS_SERVICES_ENUM.AutoScaling]: "Auto Scaling",
    [AWS_SERVICES_ENUM.CloudFormation]: "CloudFormation",
    [AWS_SERVICES_ENUM.CloudFront]: "CloudFront",
    [AWS_SERVICES_ENUM.CloudHSM]: "CloudHSM",
    [AWS_SERVICES_ENUM.CloudSearch]: "CloudSearch",
    [AWS_SERVICES_ENUM.CloudTrail]: "CloudTrail",
    [AWS_SERVICES_ENUM.CloudWatch]: "CloudWatch",
    [AWS_SERVICES_ENUM.CloudWatchEvents]: "CloudWatch Events",
    [AWS_SERVICES_ENUM.CloudWatchLogs]: "CloudWatch Logs",
    [AWS_SERVICES_ENUM.CodeBuild]: "CodeBuild",
    [AWS_SERVICES_ENUM.CodeCommit]: "CodeCommit",
    [AWS_SERVICES_ENUM.CodeDeploy]: "CodeDeploy",
    [AWS_SERVICES_ENUM.CodePipeline]: "CodePipeline",
    [AWS_SERVICES_ENUM.CognitoIdentity]: "Cognito Identity",
    [AWS_SERVICES_ENUM.CognitoSync]: "Cognito Sync",
    [AWS_SERVICES_ENUM.Config]: "Config",
    [AWS_SERVICES_ENUM.DataPipeline]: "Data Pipeline",
    [AWS_SERVICES_ENUM.DeviceFarm]: "DeviceFarm",
    [AWS_SERVICES_ENUM.DevPay]: "DevPay",
    [AWS_SERVICES_ENUM.DirectConnect]: "Direct Connect",
    [AWS_SERVICES_ENUM.DirectoryService]: "Directory Service",
    [AWS_SERVICES_ENUM.DynamoDB]: "DynamoDB",
    [AWS_SERVICES_ENUM.DynamoDBStreams]: "DynamoDB Streams",
    [AWS_SERVICES_ENUM.ElasticCloudCompute]: "Elastic Cloud Compute (EC2)",
    [AWS_SERVICES_ENUM.EC2ContainerRegistry]: "EC2 Container Registry (ECR)",
    [AWS_SERVICES_ENUM.EC2ContainerService]: "EC2 Container Service (ECS)",
    [AWS_SERVICES_ENUM.ElasticBeanstalk]: "Elastic Beanstalk",
    [AWS_SERVICES_ENUM.ElasticTranscoder]: "Elastic Transcoder",
    [AWS_SERVICES_ENUM.ElastiCache]: "ElastiCache",
    [AWS_SERVICES_ENUM.ElasticFileSystem]: "Elastic File System (EFS)",
    [AWS_SERVICES_ENUM.ElasticLoadBalancing]: "Elastic Load Balancing (ELB)",
    [AWS_SERVICES_ENUM.ElasticMapReduce]: "Elastic MapReduce (EMR)",
    [AWS_SERVICES_ENUM.Firehose]: "Firehose",
    [AWS_SERVICES_ENUM.GameLift]: "GameLift",
    [AWS_SERVICES_ENUM.Glacier]: "Glacier",
    [AWS_SERVICES_ENUM.Health]: "Health",
    [AWS_SERVICES_ENUM.IdentityandAccessManagement]: "Identity and Access Management (IAM)",
    [AWS_SERVICES_ENUM.ImportExport]: "Import/Export",
    [AWS_SERVICES_ENUM.Inspector]: "Inspector",
    [AWS_SERVICES_ENUM.InternetofThings]: "Internet of Things (IoT)",
    [AWS_SERVICES_ENUM.IoTData]: "IoT Data",
    [AWS_SERVICES_ENUM.Kinesis]: "Kinesis",
    [AWS_SERVICES_ENUM.KinesisAnalytics]: "Kinesis Analytics",
    [AWS_SERVICES_ENUM.KeyManagementService]: "Key Management Service (KMS)",
    [AWS_SERVICES_ENUM.Lambda]: "Lambda",
    [AWS_SERVICES_ENUM.Lightsail]: "Lightsail",
    [AWS_SERVICES_ENUM.MachineLearning]: "Machine Learning",
    [AWS_SERVICES_ENUM.MobileAnalytics]: "Mobile Analytics",
    [AWS_SERVICES_ENUM.OpsWorks]: "OpsWorks",
    [AWS_SERVICES_ENUM.Pinpoint]: "Pinpoint",
    [AWS_SERVICES_ENUM.Polly]: "Polly",
    [AWS_SERVICES_ENUM.RelationalDatabaseService]: "Relational Database Service (RDS)",
    [AWS_SERVICES_ENUM.Redshift]: "Redshift",
    [AWS_SERVICES_ENUM.Rekognition]: "Rekognition",
    [AWS_SERVICES_ENUM.Route53]: "Route 53",
    [AWS_SERVICES_ENUM.Route53Domains]: "Route 53 Domains",
    [AWS_SERVICES_ENUM.ServiceCatalog]: "Service Catalog",
    [AWS_SERVICES_ENUM.SimpleStorageService]: "Simple Storage Service (S3)",
    [AWS_SERVICES_ENUM.SimpleDB]: "SimpleDB (SDB)",
    [AWS_SERVICES_ENUM.SimpleEmailService]: "Simple Email Service (SES)",
    [AWS_SERVICES_ENUM.Snowball]: "Snowball",
    [AWS_SERVICES_ENUM.SimpleNotificationService]: "Simple Notification Service (SNS)",
    [AWS_SERVICES_ENUM.SimpleQueueService]: "Simple Queue Service (SQS)",
    [AWS_SERVICES_ENUM.SimpleSystemsManagement]: "Simple Systems Management (SSM)",
    [AWS_SERVICES_ENUM.StepFunctions]: "Step Functions",
    [AWS_SERVICES_ENUM.StorageGateway]: "Storage Gateway",
    [AWS_SERVICES_ENUM.SecurityTokenService]: "Security Token Service (STS)",
    [AWS_SERVICES_ENUM.Support]: "Support",
    [AWS_SERVICES_ENUM.SimpleWorkflowService]: "Simple Workflow Service (SWF)",
    [AWS_SERVICES_ENUM.VirtualPrivateCloud]: "Virtual Private Cloud (VPC)",
    [AWS_SERVICES_ENUM.WorkSpaces]: "WorkSpaces",
    [AWS_SERVICES_ENUM.XRay]: "X-Ray"
};

/**
 *
 * @returns {*}
 */
export const getServiceSuggestionList = function() {
    return map(AWS_SERVICES_OPTIONS, function(value, key){
        return {
            label: value,
            value: key,
        };
    });
};
