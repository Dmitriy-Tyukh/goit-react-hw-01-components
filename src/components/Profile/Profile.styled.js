import styled from '@emotion/styled';

export const Avatar = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: 50%;
  box-shadow: ${p => `${p.theme.shadows.primaryShadow}`};
`; 
export const UserName = styled.p`
  font-family: ${p => `${p.theme.fonts.roboto}`};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[0]}px;
`;
export const UserTag = styled.p`
  font-family: ${p => `${p.theme.fonts.monserat}`};
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  color: ${p => `${p.theme.colors.darkgrey}`};
`;
export const Location = styled.p`
  font-family: ${p => `${p.theme.fonts.arial}`};
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  color: ${p => `${p.theme.colors.darkgrey}`};
`;

export const Item = styled.li`
  flex: 1 1 33.333%;
  margin: ${p => p.theme.space[0]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[0]}px;
  list-style-type: none;
  border: ${p => `1px solid ${p.theme.colors.darkgrey}`};
  background-color: ${p => `${p.theme.colors.beige}`};
`;
export const Lable = styled.span`
  display: block;
  text-align: center;
  font-family: ${p => `${p.theme.fonts.arial}`};
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: uppercase;
  color: ${p => `${p.theme.colors.grey}`};
`;
export const Quantity = styled.span`
  display: block;
  font-family: ${p => `${p.theme.fonts.arial}`};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;