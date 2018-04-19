import React, {Component} from 'react';
import styles from './MessageList.css';

const Message = props => {
	<div className={styles.Message}>
		<strong>{props.from} :</strong>
		<span>{props.text}</span>
	</div>
};

const MessageList = props => {
	<div className={styles.MessasgeList}>
		{
			props.message.map((message, i) => {
				<Message 
					key={i}
					from={message.from}
					text={message.text}
				/>
			})
		}
	</div>
};

export default MessageList;