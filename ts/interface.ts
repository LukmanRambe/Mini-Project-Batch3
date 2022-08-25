interface IAddModal {
  isOpen: boolean;
  onClose: () => void;
}

interface ILayout {
  title: string;
  children: React.ReactChild;
}

interface Todo {
  id: number;
  title: string;
  body: string;
  jam_task: string;
  tanggal_task: string;
  is_done: boolean;
  overdue: boolean;
}

export type { IAddModal, ILayout, Todo };
