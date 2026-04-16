import type { Bartender } from '$lib/types/bartenders';

import AARON_KRAUSS from '$lib/data/bartenders/aaron-krauss';
import ALEJANDRO_OLIVARES from '$lib/data/bartenders/alejandro-olivares';
import ANTOINE_PEYCHAUD from '$lib/data/bartenders/antoine-peychaud';
import AVIARY_BAR_KUALA_LUMPUR from '$lib/data/bartenders/aviary-bar-kuala-lumpur';
import BRIAN_MILLER from '$lib/data/bartenders/brian-miller';
import CAROUSEL_BAR from '$lib/data/bartenders/carousel-bar';
import DICK_BRADSELL from '$lib/data/bartenders/dick-bradsell';
import DONN_THE_BEACHCOMBER from '$lib/data/bartenders/donn-beach';
import GIUSEPPE_GONZALEZ from '$lib/data/bartenders/giuseppe-gonzalez';
import HENRY_C_RAMOS from '$lib/data/bartenders/henry-c-ramos';
import IVY_MIX from '$lib/data/bartenders/ivy-mix';
import JEFF_BEACHBUM_BERRY from '$lib/data/bartenders/jeff-beachbum-berry';
import JEFFREY_MORGENTHALER from '$lib/data/bartenders/jeffrey-morgenthaler';
import JOAQUIN_SIMO from '$lib/data/bartenders/joaquin-simo';
import JORG_MEYER from '$lib/data/bartenders/jorg-meyer';
import LA_CAPILLA from '$lib/data/bartenders/la-capilla';
import MARTIN_CATE from '$lib/data/bartenders/martin-cate';
import PAT_OBRIEN from '$lib/data/bartenders/pat-obrien';
import PAUL_MCGEE from '$lib/data/bartenders/paul-mcgee';
import PHIL_WARD from '$lib/data/bartenders/phil-ward';
import POPO_GALSINI from '$lib/data/bartenders/popo-galsini';
import RAFFLES_HOTEL_LONG_BAR from '$lib/data/bartenders/raffles-hotel-long-bar';
import REED_CAHILL from '$lib/data/bartenders/reed-cahill';
import SAM_ROSS from '$lib/data/bartenders/sam-ross';
import SOGGY_DOLLAR_BAR from '$lib/data/bartenders/soggy-dollar-bar';
import TELLERS from '$lib/data/bartenders/tellers';
import TOBY_MALONEY from '$lib/data/bartenders/toby-maloney';
import TRADER_VIC from '$lib/data/bartenders/trader-vic';

export const allBartenders: Bartender[] = [
	AARON_KRAUSS,
	ALEJANDRO_OLIVARES,
	ANTOINE_PEYCHAUD,
	AVIARY_BAR_KUALA_LUMPUR,
	BRIAN_MILLER,
	CAROUSEL_BAR,
	DICK_BRADSELL,
	DONN_THE_BEACHCOMBER,
	GIUSEPPE_GONZALEZ,
	HENRY_C_RAMOS,
	IVY_MIX,
	JEFF_BEACHBUM_BERRY,
	JEFFREY_MORGENTHALER,
	JOAQUIN_SIMO,
	JORG_MEYER,
	LA_CAPILLA,
	MARTIN_CATE,
	PAT_OBRIEN,
	PAUL_MCGEE,
	PHIL_WARD,
	POPO_GALSINI,
	RAFFLES_HOTEL_LONG_BAR,
	REED_CAHILL,
	SAM_ROSS,
	SOGGY_DOLLAR_BAR,
	TELLERS,
	TOBY_MALONEY,
	TRADER_VIC
].sort((a, b) => a.name.localeCompare(b.name));

export const bartendersBySlug = new Map<string, Bartender>(
	allBartenders.map((bartender) => [bartender.slug, bartender])
);
