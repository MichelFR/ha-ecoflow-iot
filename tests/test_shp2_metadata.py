"""SHP2 app metadata stays dynamic without replacing per-leg sensor identity."""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import ha_stubs
from ecoflow_iot.devices.whole_home_backup.smart_home_panel_ii import _circuit_metadata, _circuit_sensors
from ecoflow_iot.sensor import EcoFlowSensor

def quota(a, b, name, prefix="pd303_mc."):
    root = prefix + "loadIncreInfo.hall1IncreInfo."
    return {
        root + f"ch{a}Info.chName": name,
        root + f"ch{a}Info.splitphase.linkMark": True,
        root + f"ch{a}Info.splitphase.linkCh": b,
        root + f"ch{b}Info.chName": f"Circuit {b}",
        root + f"ch{b}Info.splitphase.linkMark": True,
        root + f"ch{b}Info.splitphase.linkCh": a,
    }

for a,b,name in [(5,7,"Car Charger"),(6,8,"Air conditioner"),(9,11,"Hot Tub")]:
    for prefix in ("pd303_mc.", ""):
        q=quota(a,b,name,prefix)
        for leg in (a,b):
            m=_circuit_metadata(q,leg)
            assert m["circuit_name"] == name
            assert m["circuit_numbers"] == [a,b]
            assert m["paired_circuit"] == (b if leg == a else a)
        q[prefix+f"loadIncreInfo.hall1IncreInfo.ch{a}Info.chName"]="Renamed"
        assert _circuit_metadata(q,b)["circuit_name"]=="Renamed"
        q[prefix+f"loadIncreInfo.hall1IncreInfo.ch{b}Info.splitphase.linkMark"]=False
        assert _circuit_metadata(q,a)["circuit_numbers"]==[a]

assert _circuit_metadata({},1)["circuit_name"]=="Circuit 1"
q={"pd303_mc":{"loadIncreInfo":{"hall1IncreInfo":{"ch1Info":{"chName":" Office "}}}}}
assert _circuit_metadata(q,1)["circuit_name"]=="Office"
for invalid in (0,13,True,"8",6,None):
    q=quota(6,8,"AC")
    q["pd303_mc.loadIncreInfo.hall1IncreInfo.ch6Info.splitphase.linkCh"]=invalid
    assert _circuit_metadata(q,6)["circuit_numbers"]==[6]

class Probe(EcoFlowSensor):
    @property
    def _quota(self):
        return self.quota

p=object.__new__(Probe)
p.entity_description=next(d for d in _circuit_sensors() if d.key=="circuit_6_watt")
p.quota={**quota(6,8,"AC"),"loadInfo.hall1Watt":[0,0,0,0,0,100,0,120,0,0,0,0]}
assert p.native_value==100
assert p.extra_state_attributes["circuit_numbers"]==[6,8]
p.quota["pd303_mc.loadIncreInfo.hall1IncreInfo.ch6Info.chName"]="New AC"
assert p.extra_state_attributes["circuit_name"]=="New AC"
assert p.entity_description.name=="Circuit 6 power"
assert p.entity_description.key=="circuit_6_watt"
print("SHP2 metadata: PASS")
