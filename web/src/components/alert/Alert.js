import { notification, Modal } from 'antd';

const { confirm } = Modal;

class Alert {

  static ToastMessage = ({ type, title, description, placement = 'bottomRight' }) => {
    notification[type]({
      message: title,
      description:
        description,
      placement,
    });
  }

  static showDeleteConfirm = (type, deleteFuction = () => { }) => {
    confirm({
      title: `Excluir ${type}`,
      content: `Tem certeza que deseja remover este ${type}?`,
      centered: true,
     onOk() {
        deleteFuction();
      },
      onCancel() { },
    });
  }



}

export default Alert;