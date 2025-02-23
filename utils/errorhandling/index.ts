export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    console.error('Error:', error.message);
    alert(error.message); // Or display the error in a toast/notification
  } else {
    console.error('An unknown error occurred:', error);
    alert('An unknown error occurred. Please try again.');
  }
};
