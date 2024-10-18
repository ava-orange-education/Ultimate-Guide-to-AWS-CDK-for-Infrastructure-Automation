import * as lambda from 'aws-cdk-lib/aws-lambda';
    const helloWorld = new lambda.Function(this, 'HelloWorldFunction', {
        runtime: lambda.Runtime.PYTHON_3_9, // Specify Python runtime
        handler: 'index.handler', // Define the handler method
        code: lambda.Code.fromInline(`
def handler(event, context):
    print("Hello, World")
    return "Hello, World"
    `), // Inline Python code
    });
