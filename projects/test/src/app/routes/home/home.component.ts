import {
  Component,
  OnInit
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import {
  ConfirmDialog,
  SnackerService,
  ThemeService
} from 'core';

import { PeopleService } from '../../services';

@Component({
  selector: 'home-route',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'test';
  value = 1092490827;
  para = `I like cats because they are fat and fluffy love me! but give me some of your food give me some of your food give me some of your food meh, i don't want it but scratch, yet fall asleep upside-down or carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. If human is on laptop sit on the keyboard be superior stand in front of the computer screen cat cat moo moo lick ears lick paws yet more napping, more napping all the napping is exhausting cuddle no cuddle cuddle love scratch scratch i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Walk on keyboard litter kitter kitty litty little kitten big roar roar feed me nya nya nyan. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans cats woo if it fits, i sits and my water bowl is clean and freshly replenished, so i'll drink from the toilet. Cats are a queer kind of folk fish i must find my red catnip fishy fish and paw your face to wake you up in the morning massacre a bird in the living room and then look like the cutest and most innocent animal on the planet cat fur is the new black . Scratch the furniture i cry and cry and cry unless you pet me, and then maybe i cry just for fun but poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls yet good morning sunshine demand to be let outside at once, and expect owner to wait for me as i think about it loved it, hated it, loved it, hated it.`;
  dialogResult = null;

  constructor(
    private dialog: MatDialog,
    private snacker: SnackerService,
    public peopleSvc: PeopleService,
    public themer: ThemeService
  ) { }

  ngOnInit() {
    this.peopleSvc.getPeople();
  }

  openDialog = () => this.dialog.open(ConfirmDialog)
    .afterClosed()
    .subscribe(res => res
      ? this.snacker.sendSuccessMessage('The operation was confirmed')
      : this.snacker.sendErrorMessage('The operation was denied'))
}
