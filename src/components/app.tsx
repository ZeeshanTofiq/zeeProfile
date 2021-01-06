import React from 'react';
import { Button, Container, Collapse } from 'react-bootstrap';
interface appState{
    show:boolean;
}
class App extends React.Component<any,appState> {
   constructor(props:any){
       super(props);
        this.state = {
            show: false
        }
   }
    render() {
        return (
            <React.Fragment>
                <div className="text-center mt-4">
                    <Button variant="primary" onClick={(e)=>{this.setState((prevState)=>{
                        return {show:!prevState.show}
                    })}}>
                        Click me
                </Button>
                </div>
                <Collapse in={this.state.show} timeout={100}>
                    <Container>
                        <p className="text-justify mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ullam fugit illo iure. Dolores culpa esse adipisci neque perspiciatis ullam! Tempora aut numquam dolore aspernatur nihil velit aliquam ullam consectetur pariatur placeat quo rem esse quis quia, omnis eos assumenda adipisci praesentium excepturi corrupti aperiam autem ex provident. Blanditiis, ipsum. Aperiam quaerat eveniet qui est, a nulla nesciunt neque. Sit voluptate dolor consectetur ex. Amet eum odio vero aut, quis dicta quos officiis. Facilis accusamus iure molestiae consequatur minus deserunt officiis dicta perferendis tempora commodi quod architecto adipisci voluptatem ipsa, laborum possimus magni. Laborum quo totam quod? Inventore, ab placeat perferendis quo voluptas suscipit reiciendis minus dignissimos assumenda pariatur tenetur, ipsa quae sequi beatae fugiat. Reprehenderit doloribus tempore placeat recusandae eaque corporis vel excepturi aperiam inventore dolores. Iste doloribus explicabo repellat in debitis porro officiis vitae a aperiam. Accusantium nam molestias tempora dolor quia neque libero nihil itaque atque tempore!
                    </p>
                    </Container>
                </Collapse>
            </React.Fragment>
        );
    }
}

export default App;