import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  scoped: true
})
export class AppProfile {

  @Prop() match: MatchResults;

  render() {
    return (
      <div class="inner">
        Profile inner content
      </div>
    )
  }
}
