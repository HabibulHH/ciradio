import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Radio from '../Models/Radio';
import RadioItemDetails from './details';
interface Props{
  radioList: Array <Radio>;
}

 export default function RadioItem({ radioList }: Props) {
    return (
        <Accordion allowMultipleExpanded ={false}>
          { radioList.map((item)=>{
             return(
               <>
                  <AccordionItem>
                  <AccordionItemPanel>
                      <RadioItemDetails/>
                    </AccordionItemPanel>
                      <AccordionItemHeading>
                          <AccordionItemButton>
                          <div className="station-item ">
                            <div className='station-name'>{item.Name}</div>
                            <div className='station-number'>{item.Frequency}</div>
                          </div>
                          </AccordionItemButton>
                      </AccordionItemHeading>
                  </AccordionItem>
              <hr/>
              </>
             )
           
           
           })}
          
        </Accordion>
    );
}

