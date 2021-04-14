import style from './Modal.module.scss';

export const Modal = () => {
  return (
    <div className="ModalBackground">
      <div className="ModalContent">
        <div style={{ width: "60%", height: "200px", background: "#fff" }}></div>
      </div>
    </div>
  )
}