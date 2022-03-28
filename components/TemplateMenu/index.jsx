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
        <CardCode value='n = int(input())' />
        <CardInput>N</CardInput>
      </Card>
      <Card>
        <CardTitle>Double Input</CardTitle>
        <CardCode value='n, m = list(map(int, input().split()))' />
        <CardInput>N, M</CardInput>
      </Card>
      <Card>
        <CardTitle>Triple Input</CardTitle>
        <CardCode value='a, b, c = list(map(int, input().split()))' />
        <CardInput>A, B, C</CardInput>
      </Card>
      <Card>
        <CardTitle>String</CardTitle>
        <CardCode value='s = input()' />
        <CardInput>S</CardInput>
      </Card>
      <Card>
        <CardTitle>String with length</CardTitle>
        <CardCode value='n = int(input())\ns = input()' />
        <CardInput>
          N<br />S
        </CardInput>
      </Card>
      <Card>
        <CardTitle>Array</CardTitle>
        <CardCode
          value={`n = int(input())\na = list(map(int, input().split()))`}
        />
        <CardInput>
          N<br />
          A(1) ... A(N)
        </CardInput>
      </Card>
      <Card>
        <CardTitle>Double Array</CardTitle>
        <CardCode
          value={`
          n = int(input())\na = list(map(int, input().split())))\nb =
          list(map(int, input().split())))`}
        />
        <CardInput>
          N<br />
          A(1) ... A(N)
          <br />
          B(1) ... B(N)
        </CardInput>
      </Card>
      <Card>
        <CardTitle>Triple Array</CardTitle>
        <CardCode
          value={`
          n = int(input())\na = list(map(int, input().split())))\nb =
          list(map(int, input().split())))\nc = list(map(int, input().split())))`}
        />
        <CardInput>
          N<br />
          A(1) ... A(N)
          <br />
          B(1) ... B(N)
          <br />
          C(1) ... C(N)
        </CardInput>
      </Card>
      <Card>
        <CardTitle>String Array</CardTitle>
        <CardCode
          value={`n = int(input())\ns = []\nfor i in range(n):\n  s.push(input())`}
        />
        <CardInput>
          N<br />
          S(1)
          <br />⋮
          <br />
          S(N)
        </CardInput>
      </Card>
      <Card>
        <CardTitle>Array Vertical</CardTitle>
        <CardCode
          value={`n = int(input())\na = []\nfor i in range(n):\n  a.push(int(input()))`}
        />
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
      <Card>
        <CardTitle>Double Array Vertical</CardTitle>
        <CardCode
          value={`n = int(input())\na = []\nb = []\nfor i in range(n):\n  args = list(map(int, input().split()))\n  a.push(args[0])\n  b.push(args[1])`}
        />
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
      <Card>
        <CardTitle>Triple Array Vertical</CardTitle>
        <CardCode
          value={`n = int(input())\na = []\nb = []\n  c = []\nfor i in range(n):\n  args = list(map(int, input().split()))\n  a.push(args[0])\n  b.push(args[1])\n  c.push(args[2])`}
        />
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
      <Card>
        <CardTitle>2D Array</CardTitle>
        <CardCode
          value={`n = int(input())\na = []\nfor i in range(n):\n  a.push(list(map(int, input().split())))`}
        />
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
  );
}

export default TemplateMenu;
