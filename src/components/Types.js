import React, {useRef, createRef} from 'react';

const typesItems = [
    {
      name: "Type 1",
      color: "#f44336",
      href: "#"
    },
    {
      name: "Type 2",
      color: "#e91e63",
      href: "#"
    },
    {
      name: "Type 3",
      color: "#9c27b0",
      href: "#"
    },
    {
      name: "Type 4",
      color: "#673ab7",
      href: "#"
    },
    {
      name: "Type 5",
      color: "#3f51b5",
      href: "#"
    }
  ];

  
  const TypesMenu = (props) => {
    const $root = useRef()
    const $items = useRef(props.items.map(createRef))
    
    return (
      <div
        ref={$root}
        className="typemenu"
      >
        {props.items.map((item, index) => (
          <a
            key={item.name}
            ref={$items.current[index]}
            className={'typeitem' + ' ' + (index + 1) + ' '+ `${props.qtype === (index + 1) ? 'selectType' : ''}`}
            href={item.href}
            onClick={async () => await props.setQtype(index + 1)}
           >
            {item.name}
          </a>
        ))}
      </div>
    )
  }

function Types(props) {
  return (
    <div>
        <TypesMenu items={typesItems} qtype={props.qtype} setQtype={props.setQtype}/>
    </div>
  )
}

export default Types;