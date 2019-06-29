import {ButtonExample} from "./content/button/ButtonExample";
import {CardExample} from "./content/card/CardExample";
import {CheckboxExample} from "./content/checkbox/CheckboxExample";
import {ChipsExample} from "./content/chips/ChipsExample";
import {RadioExample} from "./content/radio/RadioExample";
import {SelectExample} from "./content/select/SelectExample";

export const Menus = [{
  text: 'Button',
  icon: 'play_circle_outline',
  component: ButtonExample,
}, {
  text: 'Card',
  icon: 'video_label',
  component: CardExample,
}, {
  text: 'Checkbox',
  icon: 'check_box',
  component: CheckboxExample,
}, {
  text: 'Chips',
  icon: 'edit_attributes',
  component: ChipsExample,
}, {
  text: 'Radio',
  icon: 'radio_button_checked',
  component: RadioExample,
}, {
  text: 'Select',
  icon: 'storage',
  component: SelectExample,
}];

export const Repository = 'https://github.com/TroyTae/material-components-web-react-example';