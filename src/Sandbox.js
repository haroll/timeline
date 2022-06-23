import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12rem;
`

const Header = styled.header`
  background-color: blue;
  flex: 0 0 6rem;

  `
  const RoadmapContainer = styled.div`
  background-color: yellow;
  flex: 1 1 24rem;
  padding: 2.4rem;
  
  & > .content {
    margin: 0 auto;
    width: 120rem;
    height: 100%;
    background-color: #fff;
  }
`

const Details = styled.div`
  background-color: pink;
  height: 100%;
  flex: 1 1 auto;
  padding: 2.4rem;

  & > .content {
    margin: 0 auto;
    width: 96rem;
    height: 100%;
    background-color: #fff;
  }
`

const Sandbox = () => {

  return (
    <Container>
      <Header />
      <RoadmapContainer>
        <div className='content'></div>
      </RoadmapContainer>
      <Details>
        <div className='content'></div>
      </Details>
    </Container>
  );
}

export default Sandbox;