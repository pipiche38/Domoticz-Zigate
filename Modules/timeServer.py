#!/usr/bin/env python3
# coding: utf-8 -*-
#
# Author: zaraki673 & pipiche38
#

import Domoticz

from Modules.basicInputs import read_attribute_response
from datetime import datetime


def timeserver_read_attribute_request( self, sqn, nwkid, ep, cluster, manuf_spec, manuf_code , attribute):
    Domoticz.Log("timeserver_read_attribute_request %s/%s Cluster: %s Attribute: %s" %(nwkid, ep, cluster,attribute))

    data_type = value = None
    status = '86'

    if attribute == '0000': # Time (should be probded by ZiGate)
        EPOCTime = datetime(2000,1,1)
        UTCTime = int((datetime.now() - EPOCTime).total_seconds())
        value = "%08x" %UTCTime
        data_type = '23'
        status = '00'

    elif attribute == '0002': # Timezone
        #int32
        pass

    elif attribute == '0007': # LocalTime
        #uint32
        EPOCTime = datetime(2000,1,1)
        UTCTime = int((datetime.now() - EPOCTime).total_seconds())
        value = "%08x" %UTCTime
        data_type = '23'
        status = '00'

    read_attribute_response( self, nwkid, ep, sqn, cluster, status, data_type, attribute, value, manuf_code='0000')