import sqlite3
import json

def export_database():
    conn = sqlite3.connect('straps_exercises.db')
    conn.row_factory = sqlite3.Row  # This enables column access by name
    c = conn.cursor()
    
    # Get all exercises
    c.execute('''
        SELECT name, slug, content, youtube_url, youtube_embed_url, youtube_id
        FROM exercises
        ORDER BY name
    ''')
    
    exercises = [dict(row) for row in c.fetchall()]
    
    # Write to JSON file
    with open('exercises.json', 'w') as f:
        json.dump(exercises, f, indent=2)
    
    print(f"Exported {len(exercises)} exercises to exercises.json")
    conn.close()

if __name__ == "__main__":
    export_database()