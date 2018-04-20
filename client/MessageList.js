import React, {Component} from 'react';
import styles from './MessageList.css';

const Message = props => {
	console.log(props.from);
	console.log(props.text);
	return (
		<div className={styles.Message}>
			<strong>{props.from} :</strong>
			<span>{props.text}</span>
		</div>
	);
};

const MessageList = props => {
	return (
		<div className={styles.MessageList}>
			{
				props.messages.map((message, i) => (
					<Message 
						key={i}
						from={message.from}
						text={message.text}
					/>
				))
			}
		</div>
	);
};

export default MessageList;