import { TestBed } from '@angular/core/testing';
import { ButtonService } from './button.service';

describe('ButtonService', () => {
  let service: ButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default isDarkTheme as false', () => {
    expect(service.isDarkTheme()).toBe(false);
  });

  it('should have default title as "Dark Mode"', () => {
    expect(service.title()).toBe('Dark Mode');
  });

  it('should have default themeIcon as darkMode.svg', () => {
    expect(service.themeIcon()).toContain('darkMode.svg');
  });

  it('should toggle isDarkTheme', () => {
    service.onChangeTheme();
    expect(service.isDarkTheme()).toBe(true);
    expect(service.title()).toBe('Light Mode');
    expect(service.themeIcon()).toContain('lightMode.svg');
    
    service.onChangeTheme();
    expect(service.isDarkTheme()).toBe(false);
  });
});
