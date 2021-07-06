<!-- 
  ==============================
  *    Styles                  *
  ==============================
 -->
<style>
  div {
    display: flex;
    gap: .1rem;
  }
</style>


<script lang='ts'>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import starlette from 'starlette';
  import { onMount } from 'svelte';
  import Btn from "./Btn.svelte";
  import StoryWrapper from "../storybookUtils/StoryWrapper.svelte";
  // import Panel from '../panel/Panel.svelte';

  onMount(() => {
        starlette.initAs('AEFT', 'gradient', 0);

    })

</script>

<Meta
  title="Buttons/Button"
  component={Btn}
  argTypes={{
    variant: { control: 'text' },
    size: { control: 'text' },
  }}
/>

<Template let:args>
  <StoryWrapper>
    <div>
      <Btn {...args}>
      </Btn>

    </div>
  </StoryWrapper>
</Template>

<Story
  name="Base Button"
  args={{
    value: 'base',
    // uppercase: false,
    // block: false,
  }}
/>

