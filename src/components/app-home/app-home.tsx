import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  scoped: true
})
export class AppHome {

  render() {
    return (
      <div class="inner">
        Home inner content
      </div>
    );
  }
}
