# ⚛️ Todo List Application (Lab 3: Component Tree & Hooks)

🔗 [Vercel Deployment]()  
🔗 [GitHub Repository](https://github.com/Stanislav-creator-bin-h/Component-Tree.-Hooks)

## ✨ Функціональність

Додаток підтримує повний набір операцій для локального стану:

* **Додавання** нових завдань через форму введення.
* **Перемикання** статусу завершення завдання (галочка).
* **Видалення** завдання зі списку.
* **Редагування** тексту завдання (додатковий функціонал).
* Візуальне виділення завершених завдань (закреслення).
* Весь стан зберігається **локально** у пам'яті програми (без використання API).

---

## 🌳 Схема Компонентів та Потік Даних (Component Tree + Data Flow)

Ця діаграма демонструє ієрархію компонентів, розміщення стану та логіку взаємодії (Props Down, Callbacks Up).

App.jsx
│ 
└── TodoList.jsx  
      │  (State Colocation)
      │  (Містить функції-колбеки: handleAddTodo, handleDeleteTodo, handleToggleComplete, handleEditTodo)
      ├── AddTodoForm.jsx 
      │     (State: newTodo)
      │     ↑ onAddTodo(newTask: string)
      │ 
      └── TodoItem.tsx
            │   (Props: todo, onToggleComplete, onDeleteTodo, onEditTodo)
            │   (State Colocation: Локально керує станом isEditing: boolean)
            │ 
            ├── [Checkbox] onChange
            ├── [Edit/Save Button] onClick
            └── [Delete Button] onClick