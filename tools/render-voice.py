"""Run with the installed Onter Voice Lab venv from this project."""
import sys, os, re, json, subprocess
from pathlib import Path
root=Path.cwd()
sys.path.insert(0, os.environ.get('ONTER_VOICE_ROOT',r'E:\Onter VN\ONTER-VOICE-LAB'))
from engines.vieneu.adapter import VieNeuEngine
import soundfile as sf
scratch=root/'tmp'/'voice'
scratch.mkdir(parents=True,exist_ok=True)
audio=root/'audio'
audio.mkdir(exist_ok=True)
source=(root/'game.js').read_text(encoding='utf8')
lines=dict(re.findall(r"(\w+):'([^']+)'",source.split('const voiceLines={')[1].split('};')[0]))
engine=VieNeuEngine()
engine.load()
for name,line in lines.items():
    wav=scratch/(name+'.wav')
    sf.write(wav,engine.generate(line,'Ngọc Linh'),engine.sample_rate)
    subprocess.run(['ffmpeg','-v','error','-y','-i',str(wav),'-af','loudnorm=I=-18:TP=-1.5:LRA=7','-codec:a','libmp3lame','-q:a','4',str(audio/(name+'.mp3'))],check=True)
    wav.unlink()
    print(name,flush=True)
(audio/'manifest.js').write_text('window.RECORDED_VOICE='+json.dumps(list(lines))+';',encoding='utf8')
scratch.rmdir()
