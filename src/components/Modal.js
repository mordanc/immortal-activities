import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import Card from "./Card";
import maxrollLogo from "../maxroll-logo.png";
import ExternalLink from "./ExternalLink";

function CardModal({ isOpen, onOpen, onClose, card = {} }) {
  const titleArray = card.title?.split(" ");
  const linkText = `${titleArray?.[0]}-${titleArray?.[1]}`;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="">
            <span className="font-immortal text-3xl ">Activity</span>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card
              title={card.title}
              location={card.location}
              days={card.days}
              times={card.times}
              hoverable={false}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>

            <ExternalLink
              title="Maxroll.gg"
              imgSrc={maxrollLogo}
              href={`https://immortal.maxroll.gg/zone-events/${linkText}`}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardModal;
