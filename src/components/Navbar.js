import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: #fff;
  transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 0rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9;
  overflow: scroll;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.95);

  @media (max-width: 576px) {
      width: 100%;
    }

    div {
      margin-top: 45rem;
      padding: 3rem;
    }

    

  a {
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 2rem 1rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #4E4F50;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;

    

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      transform: scale(1.2);
      font-weight: 800;
      border-radius: 25px;
      // background-color: #647C903f;
      background-color: #4E4F503f;
    }
  }
`


const Menu = (props) => {

  return (
    <StyledMenu open={props.open} className="random">
      <div>
        {Object.keys(props.records).map((item, ) => {
          return (
            <a key={item} href="#" onClick={async () => await props.setQues(item)}>
              {"Question" + " " + item.slice(1)}
            </a>
          )
        })}
      </div>
      
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: ${(props) => props.open ? 'fixed' : 'absolute'};
  top: 3.5rem;
  left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #4E4F50;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${(props) => props.open ? '0' : '1'};
      transform: ${(props) => props.open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = (props) => {
  return (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu records={props.records} open={open} setOpen={setOpen} setQues={props.setQues}/>
      </div>
    </div>
  )  
}

export default Navbar;

