import QuestionOption from './QuestionOption';

const Question = ({
  question,
  options,
  setAnswer,
  playerAnswer,
  correct,
  reveal,
}) => {
  return (
    <div className="question">
      <p
        className="question--text"
        dangerouslySetInnerHTML={{ __html: `${question}` }}
      />
      <div className="question--answer-options">
        {options.map((opt, i) => {
          let optionClassName = '';

          if (reveal) {
            if (i === playerAnswer && playerAnswer === correct) {
              optionClassName = 'answered';
            } else if (i === playerAnswer && playerAnswer !== correct) {
              optionClassName = 'wrong';
            } else if (i === correct) {
              optionClassName = 'answered';
            }
          } else {
            if (i === playerAnswer) {
              optionClassName = 'selected';
            }
          }
          return (
            <QuestionOption
              className={optionClassName}
              key={i}
              optionText={opt}
              index={i}
              onClick={() => setAnswer(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
