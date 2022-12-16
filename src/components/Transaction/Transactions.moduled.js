import styled from '@emotion/styled';

export const Table = styled.table`
  width: 25%;
  border-radius: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.primaryShadow};

  th {
    text-align: center;
    text-transform: capitalize;
    padding-top: ${p => p.theme.space[3]}px;
    padding-rigth: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    paddinf-left: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.lightslategray};
    background-color: ${p => p.theme.colors.magenta};
    outline: ${p => `0.1px solid ${p.theme.colors.borderPrimary}`};
  }

  td {
    text-align: center;
    text-transform: capitalize;
    padding-top: ${p => p.theme.space[3]}px;
    padding-rigth: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    paddinf-left: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.lightslategray};
    outline: ${p => `0.1px solid ${p.theme.colors.borderPrimary}`};
  }

  tr {
    background-color: ${p => p.theme.colors.bgColorTable};

    :nth-of-type(2n + 1) {
      background-color: ${p => p.theme.colors.white};
    }
  }
`;

