import styled from '@emotion/styled';

export const CardTitle = styled.h2`
  font-family: ${p => p.theme.fonts.arial};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[5]}px;
`;
export const Item = styled.li`
  list-style: none;
  flex: 1 1 25%;
  padding: ${p => p.theme.space[2]}px;
  outline: ${p => ` 0.1px solid ${p.theme.colors.borderPrimary}`};
`;
export const Label = styled.span`
  display: block;
  font-family: ${p => p.theme.fonts.arial};
  text-transform: uppercase;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const LabelValue = styled.span`
  display: block;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;