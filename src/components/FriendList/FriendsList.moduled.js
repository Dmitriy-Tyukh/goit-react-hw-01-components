import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border: ${p => `1px solid ${p.theme.colors.darkgrey}`};
  margin-bottom: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.primaryShadow};
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  outline: ${p => `1px solid ${p.theme.colors.black}`};
  margin-left: ${p => p.theme.space[4]}px;
  background-color: ${({ UserisOnline }) => UserisOnline ? p => p.theme.colors.green : p => p.theme.colors.red};
`;

export const Avatar = styled.img`
  margin-top: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[4]}px;
  border-radius: 8px;
  box-shadow: ${p => p.theme.shadows.primaryShadow};
`;

export const FriendName = styled.p`
  font-family: ${p => p.theme.fonts.arial};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
