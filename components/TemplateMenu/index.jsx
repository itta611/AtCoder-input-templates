import { Grid } from '@chakra-ui/react';
import Card, { CardTitle, CardCode, CardInput } from '../Card';

function TemplateMenu() {
  return (
    <Grid
      templateColumns={{
        md: 'repeat(3, 1fr)',
        base: 'repeat(2, 1fr)',
      }}
      mt={10}
      gap={3}
      w={'full'}
    >
      <Card>
        <CardTitle>Simple Input</CardTitle>
        <CardCode>print('Hello World')</CardCode>
        <CardInput>N, H</CardInput>
      </Card>
      <Card>
        <CardTitle>Simple Input</CardTitle>
        <CardCode>print('Hello World')</CardCode>
        <CardInput>N, H</CardInput>
      </Card>
      <Card>
        <CardTitle>Simple Input</CardTitle>
        <CardCode>print('Hello World')</CardCode>
        <CardInput>N, H</CardInput>
      </Card>
      <Card>
        <CardTitle>Simple Input</CardTitle>
        <CardCode>print('Hello World')</CardCode>
        <CardInput>N, H</CardInput>
      </Card>
    </Grid>
  );
}

export default TemplateMenu;
