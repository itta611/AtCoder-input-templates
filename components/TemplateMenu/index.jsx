import { Grid, Select } from '@chakra-ui/react';
import Card, { CardTitle, CardInput } from '../Card';
import { createContext, useState } from 'react';

function handleChange(e, setLang) {
  setLang(e.target.value);
}
const TemplateContext = createContext();

function TemplateMenu() {
  let [lang, setLang] = useState('Python');

  return (
    <TemplateContext.Provider value={lang}>
      <Select
        w={40}
        mt={10}
        onChange={(e) => {
          handleChange(e, setLang);
        }}
      >
        <option>Python</option>
        <option>C++</option>
      </Select>
      <Grid
        templateColumns={{
          md: 'repeat(3, 1fr)',
          base: 'repeat(2, 1fr)',
        }}
        mt={3}
        gap={3}
        w={'full'}
      >
        <Card code='single'>
          <CardTitle>Single Input</CardTitle>
          <CardInput>N</CardInput>
        </Card>
        <Card code='double'>
          <CardTitle>Double Input</CardTitle>
          <CardInput>N, M</CardInput>
        </Card>
        <Card code='triple'>
          <CardTitle>Triple Input</CardTitle>
          <CardInput>A, B, C</CardInput>
        </Card>
        <Card code='string'>
          <CardTitle>String</CardTitle>
          <CardInput>S</CardInput>
        </Card>
        <Card code='string-with-length'>
          <CardTitle>String with length</CardTitle>
          <CardInput>
            N<br />S
          </CardInput>
        </Card>
        <Card code='array'>
          <CardTitle>Array</CardTitle>
          <CardInput>
            N<br />
            A(1) ... A(N)
          </CardInput>
        </Card>
        <Card code='double-array'>
          <CardTitle>Double Array</CardTitle>
          <CardInput>
            N<br />
            A(1) ... A(N)
            <br />
            B(1) ... B(N)
          </CardInput>
        </Card>
        <Card code='triple-array'>
          <CardTitle>Triple Array</CardTitle>
          <CardInput>
            N<br />
            A(1) ... A(N)
            <br />
            B(1) ... B(N)
            <br />
            C(1) ... C(N)
          </CardInput>
        </Card>
        <Card code='string-array'>
          <CardTitle>String Array</CardTitle>
          <CardInput>
            N<br />
            S(1)
            <br />⋮
            <br />
            S(N)
          </CardInput>
        </Card>
        <Card code='array-vertical'>
          <CardTitle>Array Vertical</CardTitle>
          <CardInput>
            N<br />
            A(1)
            <br />
            A(2)
            <br />⋮
            <br />
            A(N)
          </CardInput>
        </Card>
        <Card code='double-arra-vertical'>
          <CardTitle>Double Array Vertical</CardTitle>
          <CardInput>
            N
            <br />
            A(1) B(1)
            <br />
            A(2) B(2)
            <br />⋮
            <br />
            A(N) B(N)
          </CardInput>
        </Card>
        <Card code='triple-array-vertical'>
          <CardTitle>Triple Array Vertical</CardTitle>
          <CardInput>
            N<br />
            A(1) B(1) C(1)
            <br />
            A(2) B(2) C(2)
            <br />⋮
            <br />
            A(N) B(N) C(N)
          </CardInput>
        </Card>
        <Card code='2d-array'>
          <CardTitle>2D Array</CardTitle>
          <CardInput>
            H, W
            <br />
            A(1, 1), A(1, 2) ... A(1, W)
            <br />⋮
            <br />
            A(H, 1), A(H, 2) ... A(H, W)
          </CardInput>
        </Card>
      </Grid>
    </TemplateContext.Provider>
  );
}

export default TemplateMenu;
export { TemplateContext };
