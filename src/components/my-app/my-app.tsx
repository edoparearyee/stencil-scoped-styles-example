import { Component } from '@stencil/core';


@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  scoped: true
})
export class MyApp {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <app-home></app-home>
          <app-profile></app-profile>
        </main>
      </div>
    );
  }
}
