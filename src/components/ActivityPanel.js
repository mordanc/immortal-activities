import React, { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Modal from "./Modal";
import Card from "./Card";

function ActivityPanel({ title = "", items = [] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [card, setCard] = useState({});

  // const onCardClick = (cardInfo) => {
  //   onOpen();
  //   setCard(cardInfo);
  // };

  function scroll(element) {
    if (isOpen) return;

    setTimeout(() => {
      document.getElementById(element).scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  }

  return (
    <AccordionItem>
      <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} card={card} />
      <h2 className="bg-immortal-dark" id={title} onClick={() => scroll(title)}>
        <AccordionButton>
          <Box flex="1" textAlign="left" className="text-xl">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {items.map((event) => (
            <Card
              key={event.title}
              title={event.title}
              location={event.location}
              days={event.days}
              times={event.times}
              // onClick={() => onCardClick(event)}
              hoverable={false}
            />
          ))}
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ActivityPanel;
