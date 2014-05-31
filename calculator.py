#!/usr/bin/env python3

# settings
SEASON_SAVINGS = True
SANTAS_DOMINION = True
FABERGE_EGG = True

# enable completion when use 'python -i'
import readline, rlcompleter

# Change autocomplete to tab
if readline.__doc__ and 'libedit' in readline.__doc__:
    # for mac
    readline.parse_and_bind("bind ^I rl_complete")
else:
    readline.parse_and_bind("tab: complete")


def cheaper():
    return .99 ** (int(SEASON_SAVINGS) + int(SANTAS_DOMINION) + int(FABERGE_EGG))

def building(price, a, b=None):
    if b is None:   return int(price * 1.15**a * cheaper())
    else:           return sum(building(price, i) for i in range(a, b))

cc_cursor =        lambda a, b=None: building(15, a, b)
cc_grandma =       lambda a, b=None: building(100, a, b)
cc_farm =          lambda a, b=None: building(500, a, b)
cc_factory =       lambda a, b=None: building(3000, a, b)
cc_mine =          lambda a, b=None: building(10000, a, b)
cc_shipment =      lambda a, b=None: building(40000, a, b)
cc_alchemy =       lambda a, b=None: building(200000, a, b)
cc_portal =        lambda a, b=None: building(1666666, a, b)
cc_timemaching =   lambda a, b=None: building(123456789, a, b)
cc_antimatter =    lambda a, b=None: building(3999999999, a, b)
cc_prism =         lambda a, b=None: building(75000000000, a, b)

def f(x):
    #s = '{:,}'.format(x)
    base_name = [
        '',
        ' thousand',
        ' million',
        ' billion',
        ' trillion',
        ' quadrillion',
        ' quintillion',
        ' sextillion',
        ' septillion',
        ' octillion',
        ' nonillion',
        ' decillion'
    ]
    b_idx = 0
    while x > 1000:
        b_idx += 1
        x /= 1000

    return '{:.3f}'.format(x) + base_name[b_idx]

