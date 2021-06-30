export const handleTextInput = (inputId: string, setData: any) => (event: React.FormEvent<HTMLInputElement>) => {
  setData[inputId]((event.target as HTMLInputElement).value)
};