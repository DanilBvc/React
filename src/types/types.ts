export interface CardProps {
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  handleOpenModal: (year: string, id: string, type: string) => void;
  id: string;
}
export interface IMain {
  input: string;
}
export interface IFormCard {
  firstName: string;
  lastName: string;
  birthday: string;
  file: File;
  country: string;
  addres: string;
  city: string;
  emailNotification: boolean;
  phoneNotification: boolean;
  coolWebsite: boolean;
  coolFroms: boolean;
  whoAreYou: string;
}
export type PartialState<State> = Partial<State> | ((prevState: State) => Partial<State>);

export interface ComponentWithSetStateAsync<State> extends React.Component {
  setStateAsync(state: PartialState<State>): Promise<void>;
}
