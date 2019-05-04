import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { KenticoClient } from '../service/kentico/kentico_client';
import { KenticoConstants } from '../constant/action_constants'

import store from "../store";

export const fetching_coffee = () => {
  return {
    type: KenticoConstants.FETCHING_COFFEE
  };
};

export const fetched_coffee = post => {
  return {
    type: KenticoConstants.FETCHED_COFFEE,
    data: post
  };
};

export const receive_error = () => {
  return {
    type: KenticoConstants.RECEIVED_ERROR
  };
};

export const fetch_kentico = ()=> {
  store.dispatch(fetching_coffee());
  
  let unsubscribe = new Subject();

  let query = KenticoClient.items()
    .orderParameter('elements.product_name')
    .type('coffee')

  query.languageParameter('en-US');

  query
    .getObservable()
    .pipe(takeUntil(unsubscribe))
    .subscribe(response => {
      store.dispatch(fetched_coffee(response));
    });
};
