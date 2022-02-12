import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const View = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vh;
  height: 70vh;
  border: solid;
  padding: 2%;
`;
const MessgeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Message = styled.span`
  height: 10%;
  width: 50%;
  border: solid;
  margin-bottom: 1em;
`;

const data = [{ user: 'me', message:'here is a message'}, {user: 'them', message: 'here is another message'}];


function Profile() {
  const feed = data.map((item, index) => {
    return (
      <Message key={index}>{item.message} -{item.user}</Message>
    )
  });

  return (
    <Container>
      <View>
        <MessgeContainer>
          {feed}
        </MessgeContainer>
      <div>
        text field
      </div>
      </View>
    </Container>
  )
}

export default Profile;