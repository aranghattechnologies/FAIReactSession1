import React, { Component } from "react";

type MessageBoxProps = {
    totalupdates? : number;
    title: string;
    lastupdated?: Date;
}
/*
    1. Props changes
    2. State changes
    3. Force update
*/
export default class MessageBox extends Component<MessageBoxProps,MessageBoxProps> {

  totalClicks: number = 0;
  constructor(props: MessageBoxProps) {
    super(props);
    this.state = {
        totalupdates: 0,
        title: props.title,
        lastupdated: new Date()
    };
  }
   
  // Fired whent he component is mounted for the first time
  componentDidMount() {
     console.log("Component mounted");
  }

  // Fired when the component is updated
   componentDidUpdate(prevProps: MessageBoxProps, prevState: MessageBoxProps) {
        console.log("Component updated");   
        
    }

    shouldComponentUpdate(nextProps: Readonly<MessageBoxProps>, nextState: Readonly<MessageBoxProps>, nextContext: any): boolean {
        if(this.totalClicks > 5)
        {
            this.totalClicks = 0;
            return true;
        }

        return false;
    }

    componentWillUnmount(): void {
        console.log("Component will unmount");
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Component did catch");
    }

  render() {
    return <div>{this.props.title}, {this.state.title} {this.state.lastupdated?.toString()}
     <button onClick={() => { this.totalClicks++; this.setState({title: "New Title", lastupdated: new Date()})}}>Change Title</button>
    </div>;
  }
}