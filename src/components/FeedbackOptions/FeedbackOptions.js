import { Button, Wrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeftFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeftFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};
