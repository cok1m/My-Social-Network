import React from 'react';
import c from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogs_items}>
        <div className={c.dialog}>
          Dima
        </div>
        <div className={c.dialog}>
          Andrey
        </div>
        <div className={c.dialog}>
          Sasha
        </div>
        <div className={c.dialog}>
          Victor
        </div>
        <div className={c.dialog}>
          Valera
        </div>
      </div>
      <div className={c.messages}>
        <div className="message">Hi</div>
        <div className="message">How are you?</div>
        <div className="message">Yo</div>
      </div>
    </div>
  )
}

export default Dialogs