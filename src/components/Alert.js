import React from 'react'


export default function Alert(props) {
  return (
    props.alert && <div>
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}!</strong>:<b>{props.alert.msg}</b>
      
      </div>
    </div>
  )
}
