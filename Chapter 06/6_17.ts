import { NagRule } from 'aws-cdk-nag';
class CustomEncryptionRule extends NagRule {
  public visit(node: IConstruct): void {
    // Custom logic to check for encryption
  }
}
Aspects.of(this).add(new CustomEncryptionRule());
