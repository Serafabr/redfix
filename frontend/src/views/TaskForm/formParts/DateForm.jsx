import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import MaskedTextInput from "react-text-mask";
import NumberFormat from 'react-number-format';
import DatePicker, { registerLocale } from "react-datepicker";
import moment from 'moment';
import pt from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";

import '../TaskForm.css';

registerLocale("pt", pt);

export default function DateForm({
  dateStart,
  dateLimit,
  dateEnd,
  progress,
  handleDateChange,
  handleProgressChange,
  editTaskDate,
  toggleForm,
  isEditDateForm
}) {
  
  function handleSubmitForm() {
    editTaskDate();
    toggleForm();
  }
  
  console.log("DateStart: ", new Date());
  console.log("DateEnd: ", moment(dateLimit));
  
  return (
    <div className="form-add-task-container">
      <Row>
        <Col md={6}>
          <div className='form-add-task__field'>
            <div className='form-add-task__field__label'>
              Data Inicial
            </div>
            <div className='form-add-task__field__sub-label'>
              Data de início da execução da tarefa (ou previsão)
            </div>
            <DatePicker 
              className='form-control form-add-task__field__input'
              wrapperClassName='date-picker--full-width'
              name="dateStart"
              locale='pt'
              dateFormat='dd/MM/yyyy'
              onChange={handleDateChange("dateStart")}
              selected={Date.parse(dateStart)}
              customInput={
                <MaskedTextInput 
                  mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]} 
                />
              }
            />
          </div>
        </Col>
        <Col md={6}>
          <div className='form-add-task__field'>
            <div className='form-add-task__field__label'>
              Prazo Final
            </div>
            <div className='form-add-task__field__sub-label'>
              Data limite para o término do serviço
            </div>
            <DatePicker 
              className='form-control form-add-task__field__input'
              wrapperClassName='date-picker--full-width'
              name="dateLimit"
              locale='pt'
              dateFormat='dd/MM/yyyy'
              onChange={handleDateChange("dateLimit")}
              selected={Date.parse(dateLimit)}
              customInput={
                <MaskedTextInput 
                  mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]} 
                />
              }
            />
          </div>
        </Col>
      </Row>
      {isEditDateForm && (
        <div>
          <Row>
            <Col md={6}>
              <div className='form-add-task__field'>
                <div className='form-add-task__field__label'>
                  Término da Execução
                </div>
                <div className='form-add-task__field__sub-label'>
                  Data do término da execução da tarefa (ou previsão)
                </div>
                <DatePicker 
                  className='form-control form-add-task__field__input'
                  wrapperClassName='date-picker--full-width'
                  name="dateEnd"
                  locale='pt'
                  dateFormat='dd/MM/yyyy'
                  onChange={handleDateChange("dateEnd")}
                  selected={Date.parse(dateEnd)}
                  customInput={
                    <MaskedTextInput 
                      mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]} 
                    />
                  }
                />
              </div>
            </Col>
            <Col md={6}>
              <div className='form-add-task__field'>
                <div className='form-add-task__field__label'>
                  Progresso
                </div>
                <div className='form-add-task__field__sub-label'>
                  Percentual da tarefa que já foi executado (entre 0% e 100%)
                </div>
                <NumberFormat
                  className='form-control miniform__field__textarea'
                  style={{ textAlign: 'right' }} 
                  placeholder='0 %'
                  allowNegative={false}
                  suffix=' %'
                  decimalScale='0'
                  isAllowed={(obj) => (obj.value >= 0 && obj.value <= 100)}
                  value={progress}
                  onChange={handleProgressChange}
                />
              </div>
            </Col>
          </Row>
          <div className="info-form__buttons">
            <Button 
              color="success" 
              size="sm" 
              style={{ marginRight: "10px" }}
              onClick={handleSubmitForm}
            >
              Salvar Alterações
            </Button>
            <Button 
              color="danger" 
              size="sm"
              onClick={toggleForm}
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
