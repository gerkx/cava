<!-- 
  ==============================
  *    Styles                  *
  ==============================
 -->



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
    color: { control: 'text'}
    // value: { control: "text"},
    // uppercase: { control: "boolean" },
    // block: { control: "boolean" },
  }}
/>

<Template let:args>
  <StoryWrapper>
      <Btn {...args}>
      </Btn>
  </StoryWrapper>
</Template>

<Story
  name="Base Button"
  args={{
    value: 'base',
    props: {
      beep: 'herp'
    }
    // uppercase: false,
    // block: false,
  }}
/>

