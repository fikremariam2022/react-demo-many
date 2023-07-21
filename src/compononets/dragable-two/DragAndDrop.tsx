import React, { useState } from "react";
import { Data, Status } from "./interfaces";
import { ContainerCards } from "./ContainerCards";
import { data } from "./assets";

const typesHero: Status[] = ["good", "normal", "bad"];

export const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>(data);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, status: Status) => {
    let card = listItems.find((item) => item.id === id);

    if (card && card.status !== status) {
      card.status = status;

      setListItems((prev) => [...prev.filter((item) => item.id !== id), card!]);
    }
  };
  return (
    <div className="grid">
      {typesHero.map((container) => (
        <ContainerCards
          status={container}
          key={container}
          items={listItems}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
