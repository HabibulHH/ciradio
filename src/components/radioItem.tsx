import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.

import RadioItemDetails from './details';

export default function Example() {
    return (
        <Accordion allowMultipleExpanded ={false}>
            <AccordionItem>
            <AccordionItemPanel>
                <RadioItemDetails/>
              </AccordionItemPanel>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <div className="station-item">
                  <div className='station-name'>Radio amar</div>
                  <div className='station-number'>89.50</div>
                </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
            </AccordionItem>
            <hr />
            <AccordionItem>
            <AccordionItemPanel>
                <RadioItemDetails/>
              </AccordionItemPanel>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <div className="station-item">
                  <div className='station-name'>Radio foorti</div>
                  <div className='station-number'>330</div>
                </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
            </AccordionItem>
            <hr />
            <AccordionItem>
            <AccordionItemPanel>
                <RadioItemDetails/>
              </AccordionItemPanel>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <div className="station-item">
                  <div className='station-name'>Radio Today</div>
                  <div className='station-number'>100.45</div>
                </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
            </AccordionItem>
        </Accordion>
    );
}

