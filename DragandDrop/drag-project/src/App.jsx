import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DragDrop from "./DragDrop";

function App() {
  const [task, setTask] = useState([
    { id: "1", title: "Card 1", description: "Yeh pehla card hai!" },
    { id: "2", title: "Card 2", description: "Yeh doosra card hai!" },
    { id: "3", title: "Card 3", description: "Yeh teesra card hai!" },
    { id: "4", title: "Card 4", description: "Yeh chautha card hai!" },
    { id: "5", title: "Card 5", description: "Yeh paanchva card hai!" },
    { id: "6", title: "Card 6", description: "Yeh chhatha card hai!" },
    { id: "7", title: "Card 7", description: "Yeh saatva card hai!" },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setTask((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newItems = [...items];
        const [movedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, movedItem);
        return newItems;
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          height: 400,
          overflowY: "auto",
          padding: 2,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": { width: 8 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: 4,
          },
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2, textAlign: "center" }}>
          Scrollable Card List
        </Typography>
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={task.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {task.map((tasks) => (
              <DragDrop
                key={tasks.id}
                id={tasks.id}
                title={tasks.title}
                description={tasks.description}
              />
            ))}
          </SortableContext>
        </DndContext>
      </Box>
    </Box>
  );
}

export default App;
