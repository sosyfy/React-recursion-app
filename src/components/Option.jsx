import { useState } from "react"

export default function Option({ option, depth, sectors, setSectors  }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const handleClick = (option) => {
      const checked = sectors.some(obj => obj.label === option.label)
  
      if (!checked) {
         setSectors([...sectors , option])
      } else {
        const remove = sectors.filter(obj => obj.label !== option.label)
        setSectors(remove) 
      }
    }
  
  
    return (
      <div>
        {option.children.length > 0 ?
          (<h3 className='option-label' onClick={()=> setIsExpanded( prev => !prev)}>{option.label}</h3>) : 
        
          (
            <div className='option-checkbox'>
              <input type="checkbox" onChange={() => handleClick(option)} checked={ sectors.some( sector => sector.label == option.label )} value={option.label}  />
              <label htmlFor="">{option.label}</label>
            </div>
          )}
        {isExpanded &&
        <div style={{ paddingLeft: `${depth * 15}px`, }}>
          {
            option.children.map((entry) => (
              <Option option={entry} depth={depth + 1} sectors={sectors}  setSectors={setSectors} key={entry.id + entry.label} />
            ))
          }
        </div>
       } 
      </div>
    )
  }